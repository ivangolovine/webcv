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
from numpy import true_divide
from emailhandle import*

app = Flask('__name__')

load_dotenv()
port = 465
nameMail = os.environ.get("emailName")
password = os.environ.get("emailPass")
msg = MIMEMultipart()
msg['From'] = nameMail
msg2 = MIMEMultipart()
msg2['From'] = nameMail

@app.route('/api/sendMail', methods=['POST'])
def emailSender():
    requestData = json.loads(request.data)
    a = requestData['mName']
    b = requestData['mMail']
    c = requestData['mMsg']
    check_valid = ContactFormValidator(a,b,c)
    if (check_valid == False):
        info_about_email = ContactFormBuilder()
        return info_about_email
    else:
        #message sent to myself
        msg['To'] = nameMail
        msg['Subject'] = 'MIG Email From CV Website'
        combmsg = "\n"+a+"\n"+b+"\n"+c
        part1 = MIMEText(combmsg, "plain")
        msg.attach(part1)
        #message sent to the sender
        msg2['To'] = b
        msg2['Subject'] = 'MIG Email Received Confirmation'
        replyMSG = "Thank you " + a + ",\n\n\n\n"+ "I will get back to you as soon as possible!\n\n\n\n" + "Kind regards,\nMIG"
        part2 = MIMEText(replyMSG, "plain")
        msg2.attach(part2)
        # Create a secure SSL context
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
            server.login(nameMail, password)
            server.sendmail(nameMail, nameMail, msg.as_string())
            server.sendmail(nameMail, b, msg2.as_string())
        return {"msg": "Successfully Sent Email"}

if name == '__main__':
    app.run(debug=True)


'''
@app.route('/api/time', methods=['GET'])
def timeGET():
    j = "nice"



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