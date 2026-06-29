import json
import os

with open('src/data/phonics/basic_phonics_curriculum.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

missing_report = []

for group in data:
    group_id = group.get('group_id')
    group_name = group.get('group_name', f"Group {group_id}")
    
    # Check blending words
    if 'blending_words' not in group:
        if 'words' in group:
            missing_report.append(f"⚠️ {group_name}: Dùng sai key 'words' thay vì 'blending_words' ở cấp độ nhóm.")
        else:
            missing_report.append(f"❌ {group_name}: Thiếu hẳn danh sách từ ghép vần (blending_words).")
            
    sounds = group.get('sounds', [])
    for idx, sound in enumerate(sounds):
        letter = sound.get('letter', f"Âm {idx+1}")
        
        if 'action' not in sound:
            missing_report.append(f"  - Âm '{letter}' ({group_name}): Thiếu hành động (action)")
        if 'mnemonic_story' not in sound:
            missing_report.append(f"  - Âm '{letter}' ({group_name}): Thiếu câu chuyện (mnemonic_story)")
            
        example_word = sound.get('example_word')
        if not example_word:
            missing_report.append(f"  - Âm '{letter}' ({group_name}): Thiếu từ ví dụ (example_word)")
        else:
            if 'word' not in example_word:
                 missing_report.append(f"  - Âm '{letter}' ({group_name}): example_word thiếu 'word'")
            if 'ipa' not in example_word:
                 missing_report.append(f"  - Âm '{letter}' ({group_name}): example_word thiếu 'ipa'")
            if 'vi' not in example_word:
                 missing_report.append(f"  - Âm '{letter}' ({group_name}): example_word thiếu 'vi'")
            if 'emoji' not in example_word:
                 missing_report.append(f"  - Âm '{letter}' ({group_name}): example_word thiếu 'emoji'")

with open('report.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(missing_report))
