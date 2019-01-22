import sys

if sys.version_info < (3, 0):
    sys.exit(
        ("This doesn't support python 2,"
         " it doesn't support {0}").format(sys.version))

try:
    from setuptools import setup, find_packages
except ImportError:
    from ez_setup import use_setuptools
    use_setuptools()

setup(name='bartleby_the_penguin',
      version='2019.01.21',
      description=("Code for data visualization."),
      author="russell",
      platforms=['linux'],
      url='https://github.com/necromuralist/Visions-Voices-Data',
      author_email="necromuralist@protonmail.com",
      packages=find_packages(),
      )
