import json

# Load JSON data
with open('assets/data/sloka.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Dictionary to store merged slokas
merged_data = {}

# Process each entry
for entry in data:
    key = (entry["chaptno"], entry["slokano"])  # Unique key based on chapter and sloka number
    spart1 = entry.get("spart1", "").strip("।")  # Get "spart1" or empty string
    spart2 = entry.get("spart2", "").strip("॥")  # Get "spart2" or empty string

    if key not in merged_data:
        merged_data[key] = {
            "chaptno": entry["chaptno"],
            "slokano": entry["slokano"],
            "spart": []
        }
    
    # Append available parts to "spart" list
    if spart1:
        merged_data[key]["spart"].append(spart1)
    if spart2:
        merged_data[key]["spart"].append(spart2)

# Convert "spart" list to a single string joined by "#"
for key in merged_data:
    merged_data[key]["spart"] = "#".join(merged_data[key]["spart"])

# Print first 11 merged entries correctly
for i, entry in enumerate(merged_data.values()):
    if i >= 11:  # Limit output to first 11 entries
        break
    print(entry)

# Save merged data back to JSON
with open('assets/data/sloka_merged.json', 'w', encoding='utf-8') as file:
    json.dump(list(merged_data.values()), file, ensure_ascii=False, indent=4)