from dotenv import load_dotenv
import os

load_dotenv()

def gemini_key() -> str:
    """Retrieves the Gemini API key from environment variables.

    Args:
        None(None): No parameters are needed.

    Returns:
        str: The Gemini API key.

    Raises:
        ValueError: Raised when GEMINI_API_KEY is not found in environment variables.
    """

    if not os.getenv('GEMINI_API_KEY'):
        raise ValueError("GEMINI_API_KEY not found in environment variables.")
    return os.getenv('GEMINI_API_KEY')

def gemini_model() -> str:
    """
    Returns the Gemini model name from the environment variables if exists, else returns a default flash model
    
    :return: The Gemini model name as a string.
    """

    if not os.getenv('GEMINI_MODEL'):
        return 'gemini-2.0-flash'
    return os.getenv('GEMINI_MODEL')