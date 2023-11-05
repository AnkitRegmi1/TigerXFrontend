import openai

from apis.manager import APIManager


class OpenAIChatGptAPI(APIManager):
    def __init__(self, starting_prompts: list[dict] = None):
        super().__init__()

        self.messages: list[dict] = starting_prompts or []
        openai.api_key = self._api_key

    async def get_response_from_context(self, message: str):
        self.messages.append({
            "role": "user",
            "content": message
        })

        print(f"2 -> {message}")

        chat_gpt_response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=self.messages
        )

        print(f"3 -> {chat_gpt_response.choices[0].message.content}")

        return chat_gpt_response.choices[0].message.content

    def get_api_key_identifier(self) -> str:
        return "openai_chatgpt_api_key"
