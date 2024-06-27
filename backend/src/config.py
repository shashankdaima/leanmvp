from dotenv import load_dotenv
import os

load_dotenv()

config = {
    "POSTGRES_URL": os.environ.get("POSTGRES_URL"),
    "IS_DEBUG": os.environ.get("DEBUG"),
}
