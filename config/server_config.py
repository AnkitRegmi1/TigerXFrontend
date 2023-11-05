import os

from flask import Flask
from flask_cors import CORS


class ServerConfig:
    template_dir = os.path.abspath('frontend/pages')

    app = Flask(__name__, template_folder=template_dir)
    cors = CORS(app, resources={r"*": {"origins": "*"}})


server_config = ServerConfig()
