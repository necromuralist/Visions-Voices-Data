#! /usr/bin/env fish
docker run -p 2211:22 --name visions-numba \
       --mount type=bind,source=$HOME/projects/Visions-Voices-Data,target=/home/demeter/Visions-Voices-Data \
       --mount type=bind,source=/media/data,target=/home/demeter/data \
       --mount type=bind,source=$HOME/projects/graeae,target=/home/demeter/graeae \
       --mount type=bind,source=$HOME/projects/models/,target=/home/demeter/models \
       -it visions-numba
