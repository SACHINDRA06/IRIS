import os

files_to_check = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith(('.html', '.js', '.css', '.md')):
            files_to_check.append(os.path.join(root, f))

count = 0
for f in files_to_check:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    if 'Aharax' in content:
        content = content.replace('Aharax', 'AharaX')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        count += 1
        print(f"Updated {f}")

print(f"Total files updated: {count}")
