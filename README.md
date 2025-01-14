# Emergency Staffing

## Description

A page for ER Nurses and Admin 

### Stack:

| Type  | Structure | Style | Elements   | Routes  | 
| :---: | :-------: | :---: | :--------: | :-----: |
| Flask | HTML5     | CSS3  | JavaScript | Python3 |

### Main Features:

1) Calculator for Number of Nurses to be Scheduled

2) Simple Presentation of Collected Data

## Installation

1) Open Terminal and Clone Repository:

```bash
git clone https://github.com/AmerikanischerAdler/emergency_staffing
```

2) Install Python:

If python3 is not installed on your machine, run:

**MacOS:**

```bash
brew update 
brew install python3
``` 

**TIP**: For MacOS, be sure that homebrew is installed on your machine. If not, visit https://brew.sh to install.

**Ubuntu:**

```bash
sudo apt update 
sudo apt install python3
```

3) Set Up Virtual Environment:

```bash
pip3 install virtualenv
python3 -m venv env
source env/bin/activate
```

4) Install Dependencies:

```bash
pip install -r requirements.txt
```

5) Terminate Virtual Environment:

```bash 
deactivate
```

## Usage

1) Open Terminal

2) Navigate to emergency_staffing Directory:

```bash
cd emergency_staffing
```

3) Start Virtual Environment

```bash
python3 -m venv env
source env/bin/activate
```

**TIP**: To terminate your virtual environment, run:

```bash
deactivate
```

4) Start Flask App:

*This will spin up a local backend server*

```bash
python3 app.py
```

**TIP**: To terminate your local server, press CTRL-C

4) Open Web Browser to New Tab or Window

5) Enter Server Address in Search Bar:

You may be able to simply click this link: http://127.0.0.1:5000/

