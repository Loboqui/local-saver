# local-saver

Local Saver is a tool designed to demonstrate a critical security vulnerability found in certain sandboxes. This vulnerability allows bypassing clipboard restrictions and firewall protections through localhost network ports, compromising the sandbox environment's isolation mechanisms. This can lead to potential data leakage and unauthorized access to the host system.

**Disclaimer: This project is intended solely for red team testing and authorized security assessments. Unauthorized exploitation of this vulnerability is strictly prohibited and may result in legal action. 免责声明：该项目仅用于红队测试和授权安全评估。严禁未经授权利用此漏洞，否则可能会导致法律诉讼。**

When the system proxy is enabled, some kind of sandbox's firewall fails to enforce network restrictions, allowing unrestricted communication between the sandbox environment and the host system via localhost network ports. This flaw undermines the sandbox's security model by permitting malicious software within the sandbox to access and exfiltrate sensitive data from the host system.

---

## Installation

To set up and run **Local Saver**, follow the instructions below. Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)

### Clone the Repository

```bash
git clone https://github.com/yourusername/local-saver.git
cd local-saver
```

## Running the Project

**Local Saver** consists of two main components: the frontend and the backend. You need to run both components simultaneously in separate terminal windows or tabs.

### 1. Run the Frontend

Open the first terminal and navigate to the `frontend` directory:

```bash
cd frontend
npm install
npm run start
```

### 2. Run the Backend

Open a second terminal and navigate to the `backend` directory:

```bash
cd backend
npm install
npm run start
```

Once both the frontend and backend are running, you can interact with the **Local Saver** tool through the frontend interface.

## Contribution

Contributions to improve the security and functionality of this repository are welcome. If you have additional information or suggestions for mitigating this vulnerability, please feel free to open an issue or submit a pull request.