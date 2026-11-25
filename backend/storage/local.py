from pathlib import Path

from storage.base import Storage


class LocalStorage(Storage):
    def __init__(self, base_dir: Path | str = "./storage"):
        self.base_dir = Path(base_dir)
        self.base_dir.mkdir(parents=True, exist_ok=True)

    def _resolve(self, path: str) -> Path:
        target = (self.base_dir / path).resolve()
        if not target.is_relative_to(self.base_dir.resolve()):
            raise ValueError(f"Path escapes storage root: {path}")
        return target

    def save_file(self, path: str, content: bytes) -> str:
        target = self._resolve(path)
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(content)
        return path

    def get_file(self, path: str) -> bytes:
        return self._resolve(path).read_bytes()

    def list_files(self, prefix: str) -> list[str]:
        target = self._resolve(prefix)
        if not target.exists():
            return []
        if target.is_file():
            return [prefix]
        return sorted(
            str(child.relative_to(self.base_dir))
            for child in target.rglob("*")
            if child.is_file()
        )

    def delete_file(self, path: str) -> None:
        target = self._resolve(path)
        if target.exists():
            target.unlink()
