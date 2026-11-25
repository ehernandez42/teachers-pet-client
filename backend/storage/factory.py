import os
from pathlib import Path

from storage.base import Storage
from storage.local import LocalStorage


def get_storage() -> Storage:
    base_dir = Path(os.getenv("STORAGE_BASE_DIR", "./storage"))
    storage_type = os.getenv("STORAGE_TYPE", "local")
    if storage_type != "local":
        raise ValueError(f"Unsupported STORAGE_TYPE: {storage_type}")
    return LocalStorage(base_dir)
