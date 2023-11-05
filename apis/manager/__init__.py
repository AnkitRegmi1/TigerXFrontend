from abc import abstractmethod

from utils import env


class APIManager:
    def __init__(self):
        self._api_key: str = ""

        self.__set_api_key()

    def __set_api_key(self):
        self._api_key = env.get(self.get_api_key_identifier())

    @abstractmethod
    def get_api_key_identifier(self) -> str:
        raise NotImplemented(f"Please return the key used to store the API key for this api.")
