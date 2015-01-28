# Base image.  You can pull from Docker Hub.  Codenvy
# provides a series of tested base images that include 
# Web Shell, installed utilities, and language support.
# You can browse our images in Docker Hub or at
# github.com/codenvy/dockerfiles. The shellinabox image
# provides core Linux utilities and terminal access to runner.
# FROM codenvy/shellinabox

# Codenvy uses this port to map IDE clients to the output of
# your application executing within the Runner. Set these
# values to the port of your application and Codenvy will
# map this port to the output within the browser, CLI, and API.
# You can set this value multiple times.
# For example:
# ENV CODENVY_APP_PORT_8080_HTTP 8080
#
# ENV CODENVY_APP_PORT_<port>_HTTP <port>

# Codenvy uses this port to map IDE clients to the debugger
# of your application within the Runner. Set these
# values to the port of your debugger and Codenvy will
# map this port to the debugger console in the browser.
# You can set this value multiple times.
# For example:
# ENV CODENVY_APP_PORT_8000_DEBUG 8000
#
# ENV CODENVY_APP_PORT_<port>_DEBUG <port>

# Set this value to the port of any terminals operating
# within your runner.  If you inherit a base image from
# codenvy/shellinabox (or any of our images that inherit
# from it, you do not need to set this value.  We already 
# set it for you.
# ENV CODENVY_WEB_SHELL_PORT <port>

# Execute your custom commands here.  You can add
# as many RUN commands as you want.  Combining
# RUN commands into a single entry will cause your 
# environment to load faster.  Also, building your image
# with docker offline and uploading it to Docker Hub
# as a pre-built base image will also cause it to load
# Faster.  This example installs python, curl, and the
# Google SDK as an example.
# RUN sudo apt-get update -y && \
#     sudo apt-get install --no-install-recommends -y -q curl build-essential python3 python3-dev python-pip git python3-pip && \
#     sudo pip3 install -U pip && \
#     sudo pip3 install virtualenv && \
#     sudo mkdir /opt/googlesdk && \
#     wget -qO- "https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz" | sudo tar -zx -C /opt/googlesdk && \
#     sudo /bin/sh -c "/opt/googlesdk/google-cloud-sdk/install.sh" && \
#     sudo chmod +x /opt/googlesdk/google-cloud-sdk/bin/gcloud


FROM codenvy/python27
  RUN mkdir /home/user/app /home/user/sdk
  RUN wget -P /home/user/ --quiet https://storage.googleapis.com/appengine-sdks/featured/google_appengine_1.9.15.zip
  RUN unzip -q /home/user/google_appengine_1.9.15.zip -d /home/user && \
      mv /home/user/google_appengine/* /home/user/sdk && \
      rm -r /home/user/google_appengine_1.9.15.zip /home/user/google_appengine
  ENV CODENVY_APP_PORT_8080_HTTP 8080
  EXPOSE 8080
  WORKDIR /home/user/sdk/
  ADD $app$ /home/user/app/
  CMD /home/user/sdk/dev_appserver.py --host=0.0.0.0 --skip_sdk_update_check=yes /home/user/app/


# Include this as the CMD instruction in your Dockerfile if
# you'd like the runner to stay alive after your commands
# have finished executing. Keeping the runner alive is
# necessary if you'd like to terminal into the image.  If 
# your Dockerfile launches a server or daemon, like Tomcat,
# you do not need to set this value as Docker will not
# terminate until that process has finished.
# CMD sleep 365d
