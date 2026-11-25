from abc import ABC, abstractmethod


class Storage(ABC):
    @abstractmethod
    def save_file(self, path: str, content: bytes) -> str:
        """Save bytes at the relative path and return the stored path."""

    @abstractmethod
    def get_file(self, path: str) -> bytes:
        """Read bytes stored at the relative path."""

    @abstractmethod
    def list_files(self, prefix: str) -> list[str]:
        """List relative paths under a directory prefix."""

    @abstractmethod
    def delete_file(self, path: str) -> None:
        """Delete the file stored at the relative path."""
