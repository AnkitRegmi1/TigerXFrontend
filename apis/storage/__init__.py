import json
from pathlib import Path


class Storage:
    def __init__(self, storage_file):
        self.storage_file = storage_file
        self.data: list[dict] = []

    def save_to_file(self):
        with open(self.storage_file, "w") as f:
            json.dump(self.data, f)

    def read_from_file(self):
        with open(self.storage_file, "r") as f:
            json.load(f)

    def add(self, data: dict, save: bool = False) -> dict:
        self.data.append(data)

        if save is True:
            self.save_to_file()

        return data
