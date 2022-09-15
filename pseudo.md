Pseudocoding Challenge 3
<!-- 
- I need to ask my user how many characters should the password be.
        -HOW do I ask that?  Is there a type of popup/prompt/etc?  Google this. -->

        1.  Prompt:  'Welcome!  Please follow the prompts to generate your unique password." ALSO
        
        Prompt User: How many characters would you like in your password? Tell min and max, but also check to see if follows the rule upon submission.
                -IF <8, tell the user it must be 8 or longer.
                    Then re-prompt
                -IF >128, tell the user it must be shorter
                    Then re-prompt
                -ELSE if 8<= password <=128 move on to next step

                COMPUTER MUST RECORD/REMEMBER THIS VALUE

        3. Prompt:  Do you want to use uppercase?
            
        4.  Prompt: Do you want lowercase letters? 

        Prompt: Do you want to use numbers?

        Prompt: Do you want to use special characters?

       
            Need array of criteria 
            Write out options as a string for each of the choices.
            Google methods that exist for string.

        6. User will select options.  
        Computer must store options and use as possible options in password.

            -->IF user chooses special characters, they need to use the storage with special characters
             x 3
             IF numbers
             IF lowercase
             IF Uppercase
             IF special characters
             **Don't forget option for empty??
             
             use to create new array
             display with matched length
             write: numbers + lowercase + uppercase 
             Randomize value
             Must match length
        
        FINALLY, Password is generated in box

## If all goes well
    -I need to ask the user what kind of input you want.
        Numbers?
        Special Characters?
        Lowercase?
        Uppercase?
    -Do I need some type of STORAGE for each of these values? 
        -->IF user chooses special characters, they need to use the storage with special characters
        x 3


After grabbing whatever values/characters the user wants
--the KEY THING IS THAT THE PASSWORD VALUE IS *****RANDOMIZED***** AND IT *****MATCHES THE LENGTH***** THAT THEY USER ASKED FOR

    IS THERE anything that we learned that could theoretically know how many times the particular line of logic should run b ased on the length that the user asked for? 
    -Is there a way to RANDOMIZE the different values we pull from the STORAGES above?  ****There is a very set way to do the MATH of RANDOMIZING the values******* (This part is already written for you in the starter code.)

