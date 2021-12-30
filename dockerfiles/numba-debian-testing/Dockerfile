ARG IMAGE_NAME=debian

# the current stable version of debian (buster) doesn't have the
# current libproj-dev packages so this is going to use the testing
# version to get the newer packages

# https://hub.docker.com/_/debian?tab=description

ARG TAG=bookworm

FROM ${IMAGE_NAME}:${TAG}

# first do the stuff that you need to be root to do
# since this is running testing I'm adding apt-listbugs and apt-listchanges
# which will let you know if an update might install a reported bug

RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-listbugs \
    apt-listchanges \
    build-essential \
    libgeos-dev \
    libproj-dev \
    openssh-server \
    proj-bin \
    python3-dev \
    python3.9-venv \
    rsync \
    screen \
    zile && \
    useradd --create-home --shell /bin/bash demeter

# bookworm comes with python 3.9, but it calls the executable python3
# so to make it a little easier, let's alias it
RUN ln -s /usr/bin/python3 /usr/bin/python

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
# also the cartopy install will fail if cython isn't installed first
# the caching idea is from https://pythonspeed.com/articles/docker-cache-pip-downloads/
RUN --mount=type=cache,target=/root/.cache \
    pip --no-cache-dir install --upgrade pip && \
    pip --no-cache-dir install --upgrade wheel && \
    pip --no-cache-dir install --upgrade cython && \
    pip --no-cache-dir install -r requirements.txt

# setup the bashrc for logging in
RUN echo 'source ~/.virtualenvs/Visions-Voices-Data/bin/activate' >> .bashrc && \
    echo  'export PATH=$PATH:$HOME/.local/bin' >> .bashrc

# switch back to root or the ssh-server won't work right
USER root
WORKDIR /
ENTRYPOINT service ssh restart && bash
