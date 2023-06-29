# Describe: 
wordCounter()

## Test: 
It should return the number 1 when text is entered into it
## Code:
`const text = "Hello";`  
`wordCounter(text)`  
## Expected Output:
`1` 


## Test:
It should return 2 when there are 2 words
## Code:
`const text = "Nice job!";`  
`wordCounter(text);`  
## Expected Output:
`2`

## Test:
It should return 0 for an empty string
# Code
`const text = "";`  
`wordCounter(text);`  
## Expected Output:
`0`

## Test:
It should return 0 for a string that only consists of spaces.
## Code:
`const text = "          ";`  
`wordCounter(text);`  
## Expected Output:
`0`;

## Test:
It should not count numbers as words.
## Code:
`const text = "Hi there 77 and 78."`  
`wordCounter(text);`  
## Expected Output:
`3`;



# Describe:
numberOfOccurencesInText(word, text)

## Test:
It should return 1 if the text and word are the same.
## Code:
`let text = "boom"`  
`numberOfOccurencesInText("boom", text);`
## Expected Output:
`1`;

## Test:
It should return 0 if teh text and word are different.
## Code:
`let text = "boom";`  
`numberOfOccurencesInText("bam", text);`
## Expected Output:
`0`;

## Test:
It should return the number of multiple occurences of a word.
## Code:
`let text = "boom bam boom bim boom"`  
`numberOfOccurencesInText("boom", text);`
## Expected Output:
`3`;

## Test:
It should return the amount of occurences regardless of case. 
## Code:
`let text = "Boom bam BOOM bim boom";`  
`numberOfOccurencesInText("boom", text);`
## Expected Output:
`3`;

## Test: 
It should return a word match regardless of punctuation.
## Code:
`const text = "Red! Red. I like red, green, and yellow.";`  
`const word = "Red";`  
`numberOfOccurrencesInText(word, text);`
## Expected Output: 
`3`

## Test: 
It should return a word match only if the same word.
## Code:
`const text = "Red! Red. I like red, green, and yellow.";`  
`const word = "Red";`  
`numberOfOccurrencesInText(word, text);`
## Expected Output: 
`3`

# Describe:
omitOffensiveWords(text)

## Test:
It should return a 0 when run. 
## Code:
`const text = "Holy Zoinks!"`  
`omitOffensiveWords(text);`  
## Expected Output:
`0`

## Test:
It should verify the word "zoinks" occurs in the text.
## Code:
`const text = "Holy Zoinks!`  
`omitOffensiveWords(text)`  
## Expected Output:
`Holy Zoinks!`

## Test:
It should remove the word "zoinks" the text.
## Code:
`const text = "Holy Zoinks!"`  
`omitOffensiveWords(text);`  
## Expected Output:
`Holy *****!`

# Describe:
wordFrequency(text)

## Test:
It should store the user's inputted text as an array.
## Code:
`const text = "Hello there my name is Brian, Brian is my name.";`  
`wordFrequency(text);`
## Expected Output:
`["Hello", "there", "my", "name", "is", "Brian,", "Brian", "is", "my", "name"]`  

## Test:
It should sort the array by frequency.
## Code:
`const text = "Hello there my name is Brian, Brian is my name.";`
`wordFrequency(text);`
## Expected Output:
`['brian', 'brian', 'hello', 'is', 'is', 'my', 'my', 'name', 'name.']`

## Test:
It should provide how many times a word occurs in the text.
## Code:
`const text = "Hello there my name is Brian, Brian is my name.";`
`wordFrequency(text);`
## Expected Output:
