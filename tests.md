# Describe: 
wordCounter()

# Test: 
It should return the number 1 when text is entered into it
# Code:
const text = "Hello";
wordCounter(text);
# Expected Output:
`1` 


# Test:
It should return 2 when there are 2 words
# Code:
const text = "Nice job!";
wordCounter(text);
# Expected Output:
`2`

# Test:
It should return 0 for an empty string
# Code
const text = "";
wordCounter(text);
# Expected Output:
`0`

# Test:
It should return 0 for a string that only consists of spaces.
# Code:
const text = "          ";
wordCounter(text);
# Expected Output:
`0`;

# Test:
It should not count numbers as words.
# Code:
const text = "Hi there 77 and 78."
wordCounter(text);
# Expected Output:
`3`;



# Describe:
numberOfOccurencesInText(word, text)

# Test:


