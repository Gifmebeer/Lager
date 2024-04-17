import pandas as pd

# Load Ethereum addresses from the prelaunch members text file
with open('prelaunch_members', 'r') as file_1:
    prelaunch_members = {line.strip().lower() for line in file_1 if line.strip()}  # Clean and unique entries

# Load Ethereum addresses from the Giveth donors text file
with open('giveth_donors', 'r') as file_2:
    giveth_donors = {line.strip().lower() for line in file_2 if line.strip()}  # Clean and unique entries

# Print counts and samples for verification
print(f"Number of prelaunch members: {len(prelaunch_members)}")
print(f"Sample of prelaunch members: {list(prelaunch_members)[:5]}")
print(f"Number of Giveth donors: {len(giveth_donors)}")
print(f"Sample of Giveth donors: {list(giveth_donors)[:5]}")

# Find unique Giveth donors not in prelaunch members
unique_giveth_donors = giveth_donors - prelaunch_members

# Identify which Giveth donors are also prelaunch members
repeated_addresses = giveth_donors & prelaunch_members

# Print counts of unique and repeated addresses for verification
print(f"Number of unique Giveth donors: {len(unique_giveth_donors)}")
print(f"Number of repeated addresses: {len(repeated_addresses)}")

# Create a DataFrame for unique Giveth donors
unique_donors_df = pd.DataFrame(list(unique_giveth_donors), columns=['Unique Giveth Donors'])

# Create a DataFrame for repeated addresses
repeated_addresses_df = pd.DataFrame(list(repeated_addresses), columns=['Repeated Addresses'])

# Save to CSV files
unique_donors_df.to_csv("unique_giveth_donors.csv", index=False)
repeated_addresses_df.to_csv("repeated_addresses_in_prelaunch.csv", index=False)

print("CSV files have been created for unique Giveth donors and repeated addresses.")
