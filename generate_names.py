import pandas as pd
import random

# Expanded data for adjectives, beer types, and colors
adjectives = ["Enchanted", "Mystic", "Roaring", "Bold", "Crisp", "Thunderous", "Serene", "Wicked", "Luminous", "Radiant", 
              "Chilled", "Stormy", "Golden", "Silver", "Rustic", "Twilight", "Dawn", "Dusky", "Fiery", "Icy"]
beer_types = ["IPA", "Stout", "Lager", "Pilsner", "Pale Ale", "Porter", "Saison", "Bock", "Dunkel", "Weissbier", 
              "Kolsch", "Amber Ale", "Barleywine", "Helles", "Gose", "Red Ale", "Brown Ale", "Blonde Ale", "Hefeweizen", "Marzen"]
colors = ["Crimson", "Azure", "Emerald", "Golden", "Silver", "Ebony", "Ivory", "Sapphire", "Jade", "Ruby"]

# Generate all possible combinations
all_possible_names = [f"{adj} {color} {beer}" for adj in adjectives for beer in beer_types for color in colors]
random.shuffle(all_possible_names)  # Shuffle to ensure randomness

# Load Ethereum addresses from a text file
with open('prelaunch_members', 'r') as file:
    addresses = [line.strip() for line in file if line.strip()]

if len(addresses) > len(all_possible_names):
    raise ValueError("Not enough unique names available to assign to each address")

# Assign a unique name to each address
creative_names = all_possible_names[:len(addresses)]

# Create DataFrame
df = pd.DataFrame({
    "Address": addresses,
    "Unique Name": creative_names
})

# Save to CSV
df.to_csv("creative_names.csv", index=False)

print("CSV file has been created with unique creative names for each address.")
