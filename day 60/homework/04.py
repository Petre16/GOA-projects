items = ["apple", "banana", "cherry", "date", "fig"]

print("Current list:", items)

item_to_remove = input("Enter an item to remove from the list: ")

try:
    items.remove(item_to_remove)
    print(f"'{item_to_remove}' has been removed.")
except ValueError:
    print(f"Error: '{item_to_remove}' is not in the list.")

print("Updated list:", items)