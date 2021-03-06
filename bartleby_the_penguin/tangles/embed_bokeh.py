# from python
from pathlib import Path
from typing import Union
import textwrap
# from pypi
from bokeh.embed import autoload_static
import bokeh.plotting
import bokeh.resources
import holoviews

PathType = Union[str, Path]


class EmbedBokeh:
    """Embed a bokeh figure

    Args:
     plot: a hvplot to embed
     folder_path: path to the folder to save the file
     file_name: name of the file to save the javascript in
     create_folder: if the folder doesn't exist create it
     make_parents: if creating a folder add the missing folders in the path
    """
    def __init__(self, plot: holoviews.core.overlay.NdOverlay,
                 file_name: str,
                 folder_path: PathType,
                 create_folder: bool=True,
                 make_parents: bool=True) -> None:
        self.plot = plot
        self._figure = None
        self.create_folder = create_folder
        self.make_parents = make_parents
        self._folder_path = None
        self.folder_path = folder_path
        self._file_name = None
        self.file_name = file_name
        self._source = None
        self._javascript = None
        self._bokeh_source = None
        self._export_string = None
        return

    @property
    def folder_path(self) -> Path:
        """The path to the folder to store javascript"""
        return self._folder_path

    @folder_path.setter
    def folder_path(self, path: PathType) -> None:
        """Sets the path to the javascript folder"""
        self._folder_path = Path(path)
        if self.create_folder and  not self._folder_path.is_dir():
            self._folder_path.mkdir(parents=self.make_parents)
        return

    @property
    def file_name(self) -> str:
        """The name of the javascript file"""
        return self._file_name

    @file_name.setter
    def file_name(self, name: str) -> None:
        """Sets the filename

        Args:
         name: name to save the javascript (without the folder)
        """
        name = Path(name)
        self._file_name = "{}.js".format(name.stem)
        return

    @property
    def figure(self) -> bokeh.plotting.Figure:
        """The Figure to plot"""
        if self._figure is None:
            self._figure = holoviews.render(self.plot)
        return self._figure

    @property
    def bokeh_source(self) -> bokeh.resources.Resources:
        """The javascript source
        """
        if self._bokeh_source is None:
            self._bokeh_source = bokeh.resources.CDN
        return self._bokeh_source

    @property
    def source(self) -> str:
        """The HTML fragment to export"""
        if self._source is None:
            self._javascript, self._source = autoload_static(self.figure,
                                                             self.bokeh_source,
                                                             self.file_name)
        return self._source

    @property
    def javascript(self) -> str:
        """javascript to save"""
        if self._javascript is None:
            self._javascript, self._source = autoload_static(self.figure,
                                                             self.bokeh_source,
                                                             self.file_name)
        return self._javascript

    @property
    def export_string(self) -> str:
        """The string to embed the figure into org-mode"""
        if self._export_string is None:
            self._export_string = textwrap.dedent(
                """#+begin_export html{}
#+end_export""".format(self.source))
        return self._export_string

    def save_figure(self) -> None:
        """Saves the javascript file"""
        with open(self.folder_path.joinpath(self.file_name), "w") as writer:
            writer.write(self.javascript)
        return

    def __call__(self) -> None:
        """Creates the bokeh javascript and emits it"""
        self.save_figure()
        print(self.export_string)
        return

    def reset(self) -> None:
        """Sets the generated (bokeh) properties back to None"""
        self._export_string = None
        self._javascript = None
        self._source = None
        self._figure = None
        return
