import os
import json

def is_chinese_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Check for common CJK characters
            for char in content:
                if '\u4e00' <= char <= '\u9fff':
                    return True
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return False

def scan_dir(directory):
    chinese_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md') or file.endswith('.mdx'):
                # Skip already translated files
                if file.endswith('-en.md') or file.endswith('-en.mdx'):
                    continue
                
                fullpath = os.path.join(root, file)
                if is_chinese_file(fullpath):
                    chinese_files.append(fullpath)
    return chinese_files

articles = scan_dir('/Users/Yee/Sources/yeelabs/articles')
library = scan_dir('/Users/Yee/Sources/yeelabs/library')

print(json.dumps({'articles': articles, 'library': library}, indent=2))
