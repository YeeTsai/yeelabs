import os
import shutil

def rename_pairs(directory):
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist!")
        return

    files = os.listdir(directory)
    print(f"Scanning {directory}, found {len(files)} files")
    
    en_files = [f for f in files if f.endswith('-en.md') or f.endswith('-en.mdx')]
    print(f"Found {len(en_files)} English files in {directory}: {en_files}")
    
    count = 0
    for en_file in en_files:
        if en_file.endswith('.md'):
             base_name = en_file[:-6] # remove -en.md
             extension = '.md'
        else:
             base_name = en_file[:-7] # remove -en.mdx
             extension = '.mdx'

        # Double check
        # if using replace, it might replace in the middle too if name resembles
        # explicit slicing is safer
        
        zh_file = base_name + extension
        new_zh_file = base_name + '-zh' + extension
        new_en_file = zh_file
        
        zh_path = os.path.join(directory, zh_file)
        en_path = os.path.join(directory, en_file)
        new_zh_path = os.path.join(directory, new_zh_file)
        new_en_path = os.path.join(directory, new_en_file)
        
        if os.path.exists(zh_path) and os.path.exists(en_path):
            print(f"Processing pair: {zh_file} and {en_file}")
            try:
                os.rename(zh_path, new_zh_path)
                print(f"  Renamed {zh_file} -> {new_zh_file}")
                os.rename(en_path, new_en_path)
                print(f"  Renamed {en_file} -> {new_en_file}")
                count += 1
            except Exception as e:
                print(f"Error renaming: {e}")
        else:
             print(f"Skipping {en_file}, pair not found. zh exists: {os.path.exists(zh_path)}")

    print(f"Processed {count} pairs in {directory}")

rename_pairs('library')
