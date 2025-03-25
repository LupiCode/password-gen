import random
import string

def generate_password(length):
    if length < 8:
        raise ValueError("Password length must be at least 8 to include all character types.")
    
    all_chars = string.ascii_letters + string.digits + string.punctuation
    password = (
        random.choice(string.ascii_lowercase) +
        random.choice(string.ascii_uppercase) +
        random.choice(string.digits) +
        random.choice(string.punctuation)
    )
    
    password += ''.join(random.choices(all_chars, k=length - 4))
    password = ''.join(random.sample(password, len(password)))  # Shuffle to mix character types
    
    return password

if __name__ == "__main__":
    try:
        length = int(input("Enter password length: "))
        print("Generated password:", generate_password(length))
    except ValueError as e:
        print("Error:", e)
