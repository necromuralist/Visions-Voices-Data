ARG IMAGE_NAME=python

# numba only supports up to python 3.9 according to pypi
ARG TAG=3.9-bullseye

FROM ${IMAGE_NAME}:${TAG}

# first do the stuff that you need to be root to do
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    rsync \
    zile \
    screen \
    python3-dev \
    libgeos-dev \
    libproj-dev \
    proj-bin \
    openssh-server && \
    useradd --create-home --shell /bin/bash demeter

# # switch from root to demeter
USER demeter
WORKDIR /home/demeter

# copy over some files
COPY --chown=demeter:demeter authorized_keys .ssh/authorized_keys
COPY --chown=demeter:demeter screenrc .screenrc
COPY --chown=demeter:demeter requirements.txt .

# define our virtualenv paths
ENV VIRTUALENVS=.virtualenvs
ENV VIRTUALENV=$VIRTUALENVS/Visions-Voices-Data

# setup the virtualenv
RUN mkdir $VIRTUALENVS && \
    python -m venv $VIRTUALENV

# use the virtualenv
ENV PATH="$VIRTUALENV/bin:$PATH"

# install wheel outside of the requirements file
# otherwise the other packages in the file won't be able to use it
RUN --mount=type=cache,target=/root/.cache \
    pip --no-cache-dir install --upgrade pip && \
    pip --no-cache-dir install --upgrade wheel && \
    pip --no-cache-dir install -r requirements.txt

# setup the bashrc for logging in
RUN echo 'source ~/.virtualenvs/Visions-Voices-Data/bin/activate' >> .bashrc && \
    echo  'export PATH=$PATH:$HOME/.local/bin' >> .bashrc

# switch back to root or the ssh-server won't work right
USER root
WORKDIR /
ENTRYPOINT service ssh restart && bash
