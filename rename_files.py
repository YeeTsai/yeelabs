import os
import shutil

def rename_pairs(directory):
    files = os.listdir(directory)
    # Find all English files ending with -en.md or -en.mdx
    en_files = [f for f in files if f.endswith('-en.md') or f.endswith('-en.mdx')]
    
    count = 0
    for en_file in en_files:
        base_name = en_file.replace('-en.md', '').replace('-en.mdx', '')
        extension = '.md' if en_file.endswith('.md') else '.mdx'
        
        # The expected original Chinese file name
        zh_file = base_name + extension
        
        # The new name for the Chinese file
        new_zh_file = base_name + '-zh' + extension
        
        # The new name for the English file (taking over the original spot)
        new_en_file = zh_file
        
        zh_path = os.path.join(directory, zh_file)
        en_path = os.path.join(directory, en_file)
        new_zh_path = os.path.join(directory, new_zh_file)
        new_en_path = os.path.join(directory, new_en_file)
        
        if os.path.exists(zh_path) and os.path.exists(en_path):
            print(f"Processing pair: {zh_file} and {en_file}")
            
            # 1. Rename original (Chinese) to -zh
            print(f"  Renaming {zh_file} -> {new_zh_file}")
            os.rename(zh_path, new_zh_path)
            
            # 2. Rename English (-en) to original name
            print(f"  Renaming {en_file} -> {new_en_file}")
            os.rename(en_path, new_en_path)
            
            count += 1
            
    print(f"Processed {count} pairs in {directory}")

rename_pairs('articles')
rename_pairs('library')
