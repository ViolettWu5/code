
from flask import Flask, render_template, redirect, request, url_for, session
import os

app = Flask(__name__)
app.secret_key = "Ciao"

@app.route('/')
def index():
    if 'user' in session:
        return redirect(url_for('member'))
    return render_template('index.html')

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    acc=request.form["x"]
    pas=request.form["y"]
    if acc == "test" and pas == "test":
        session['username'] = "hi"
        return redirect ("/member/")
    else:
        return redirect ("/error/")

@app.route('/member/')
def member():
    if "username" in session:
        return render_template("member.html")
    else:
        return redirect("/")

@app.route('/error/')
def error():
    return render_template('error.html')

@app.route('/signout')
def logout():
    session.pop("username", None)
    return render_template("base.html")


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000)