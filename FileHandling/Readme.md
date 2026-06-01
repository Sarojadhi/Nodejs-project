# 🌐 Web, DNS, Internet & Node.js Basics (Roman Nepali)

Yo README file ma web kasari work garcha, DNS kasari chalcha, internet request kasari jancha, ani Node.js ko basic concepts haru Roman Nepali ma explain garincha.

---

## Table of Contents

- [Introduction](#introduction)
- [How DNS Works](#how-dns-works)
- [How DNS Actually Works](#how-dns-actually-works)
- [How Web Works](#how-web-works)
- [What are Protocols](#what-are-protocols)
- [Node.js Core Modules](#nodejs-core-modules)
- [require() Keyword](#require-keyword)
- [Conclusion](#conclusion)

---

## Introduction

Web development ma sabai kura internet communication mathi depend garcha. Browser le server sanga connect garna DNS, TCP, HTTP jasto process follow garcha. Node.js le JavaScript lai server side ma run garna milcha.

---

## How DNS Works

DNS (Domain Name System) lai internet ko **phonebook** jasto bujhna sakinchha. Yo domain name lai IP address ma convert garcha.

### Main Components:
- **DNS**: Domain name lai IP ma convert garcha
- **DNS Query**: Browser le pathaune request to find IP
- **DNS Server**: IP return garne system
- **Browser Connection**: IP use गरेर server sanga connect huncha

### Flow:
User URL halcha → Browser DNS query pathauncha → DNS server le IP dincha → Browser server sanga connect huncha

---

## How DNS Actually Works

DNS lookup ek hierarchy ma huncha:

1. **Root DNS Server**
   - First entry point ho
2. **TLD Server (.com, .org, .np)**
   - Domain type handle garcha
3. **Authoritative DNS Server**
   - Actual IP address store garcha

### Flow:
Browser → Root DNS → TLD DNS → Authoritative DNS → IP return huncha

---

## How Web Works

Web request complete huna multiple steps huncha:

1. User URL enter garcha (Client Request)
2. DNS resolution huncha (IP find garna)
3. TCP connection establish huncha
4. HTTP request send huncha
5. Server request process garcha
6. HTTP response return huncha
7. Data network bata transfer huncha
8. Browser response receive garcha
9. Webpage render huncha

---

## What are Protocols

Protocols bhaneko devices haru bich communication garne rules ho.

### Common Protocols:
- **HTTP** → Web data transfer garna use huncha
- **HTTPS** → Secure HTTP (encrypted)
- **TCP** → Reliable data delivery ensure garcha

---

## Node.js Core Modules

Node.js ma built-in modules haru huncha jun install garnu pardaina.

### Features:
- Built-in huncha
- Fast performance dincha
- Backend development ma useful huncha

### Examples:
- `fs` → File read/write garna
- `http` → Server create garna
- `path` → File path handle garna

---

## require() Keyword

Node.js ma `require()` le module import garna use huncha.

### Purpose:
- Core modules import garna
- Local files import garna
- NPM packages import garna

### Key Concepts:

#### 1. Core Modules
Node.js built-in modules:

#### 2. Caching
Ek patak load bhayepachi module cache huncha → performance improve huncha

#### 3. JS File Resolution
Node.js le `.js` auto detect garcha

#### 4. Path Module
File path manage garna use huncha

### Example Code:

```javascript
const fs = require('fs');
const path = require('path');