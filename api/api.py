from crypt import methods
from unicodedata import name
from aiohttp import request
from flask import Flask
import os
from flask import Flask, render_template, redirect, url_for, request, json
from flask.globals import session
from flask.wrappers import Request
import smtplib, ssl
from dotenv import load_dotenv
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import re

from numpy import true_divide

app = Flask('__name__')

load_dotenv()
port = 465
nameMail = os.environ.get("emailName")
password = os.environ.get("emailPass")
msg = MIMEMultipart()
msg['From'] = nameMail
# Make a regular expression
# for validating an Email
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

def Validate_Email(email):
    if (re.fullmatch(regex,email)):
        return True
    else:
        return False


def ContactFormValidator(a,b,c):
    if ((a.isalnum() != True) or (len(a) > 30)):
        return "incorrect name"
    if (Validate_Email(b) == False):
        return "incorrect email"
    if (len(c) > 2000):
        return "message is too long"
    return "correct input"

@app.route('/api/time', methods=['GET'])
def timeGET():
    j = "nice"



@app.route('/api/sendMail', methods=['POST'])
def bobjk():
    requestData = json.loads(request.data)
    a = requestData['mName']
    b = requestData['mMail']
    c = requestData['mMsg']
    info_about_email = ContactFormValidator(a,b,c)
    if (info_about_email != "correct input"):
        return {"msg": info_about_email}
    else:
        msg['To'] = b
        msg['Subject'] = 'Work Info'
        combmsg = "\n"+a+"\n"+b+"\n"+c
        part1 = MIMEText(combmsg, "plain")
        msg.attach(part1)
        # Create a secure SSL context
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
            server.login(nameMail, password)
            server.sendmail(nameMail, nameMail, msg.as_string())
            server.sendmail(nameMail, b, msg.as_string())
        return {"msg": "Successfully Sent Email"}

if name == '__main__':
    app.run(debug=True)


'''

@app.route('/api/sendMail', methods=['GET', 'POST'])
def bobjk():
    requestData = json.loads(request.data)
    a = requestData['mName']
    b = requestData['mMail']
    c = requestData['mMsg']
    msg['To'] = b
    msg['Subject'] = 'Work'
    combmsg = "\n"+a+"\n"+b+"\n"+c
    part1 = MIMEText(combmsg, "plain")
    msg.attach(part1)
    # Create a secure SSL context
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
        server.login(nameMail, password)
        server.sendmail(nameMail, nameMail, msg.as_string())
        server.sendmail(nameMail, b, msg.as_string())
    return {"msg": "Successfully Sent Email"}




if name == '__main__':
    app.run(debug=True)


'''