from apis.storage import Storage


class Config:
    storage_config = Storage("user_feedback.json")


config = Config()
