import json

with open('src/data/phonics/rules_60.json', 'r', encoding='utf-8') as f:
    rules = json.load(f)

with open('src/data/phonics/mouth_shapes.json', 'r', encoding='utf-8') as f:
    mouth_data = json.load(f)

all_shapes = mouth_data['mouth_shapes_guide']['vowels_and_diphthongs'] + mouth_data['mouth_shapes_guide'].get('consonants', [])

shape_ipas = [s['ipa'] for s in all_shapes]

missing = []
for rule in rules:
    sound = rule['sound']
    sound_alt = sound.replace(':', 'ː')
    
    if sound not in shape_ipas and sound_alt not in shape_ipas:
        missing.append(f"Bài {rule['id']} (pattern: {rule['pattern']}, sound: {sound}) thiếu khẩu hình miệng!")

with open('report_rules.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(missing))
