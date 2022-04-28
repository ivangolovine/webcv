from api import *
import re

# Make a regular expression
# for validating an Email
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
invalid_name = False
invalid_mail = False
invalid_text = False

def Validate_Email(email):
    if (re.fullmatch(regex,email)):
        return True
    else:
        return False
    
def ContactFormValidator(a,b,c):
    global invalid_name, invalid_mail, invalid_text
    invalid_name= ((a.isalpha() == False) or (len(a) > 30))
    invalid_mail = (Validate_Email(b) == False)
    invalid_text = (len(c) > 2000)

    if (invalid_name or invalid_mail or invalid_text):
        return False
    return True

#creates dictionary to return
def ContactFormBuilder():
    thisdict = {}
    if (invalid_name):
        thisdict["msgnaminc"] = "Incorrect Name Format"
    if (invalid_mail):
        thisdict["msgemailinc"] = "Incorrect Email Format"
    if (invalid_text):
        thisdict["msgtextinc"] = "Incorrect Text Format"
    return thisdict