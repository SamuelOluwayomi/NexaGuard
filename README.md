# NexaGuard: Decentralized Security Intelligence

![NexaGuard Logo](./assets/NexaGuard.jpg)

**NexaGuard** is a premier, decentralized AI security specialist built on [ElizaOS](https://elizaos.com) and accelerated by the [Nosana](https://nosana.com) GPU network. It transforms raw commits and on-chain telemetry into verifiable **Proof of Work**, protecting digital footprints through privacy-preserving compute and advanced ZK-verification.

---

## 🛡️ Core Capabilities

NexaGuard is engineered to be the ultimate guardian for decentralized builders, leveraging the bleeding edge of the Nosana-Solana ecosystem.

- **Heavy GPU Compute**: Offloads complex security LLMs and forensic image generation to Nosana's decentralized GPU network for maximum throughput.
- **ZK-Privacy Ready**: Integrated verification via Noir-based ZK-circuits to guard your identity while maintaining on-chain transparency.
- **On-Chain Persistence**: Mints achievements and security audits as verifiable **cNFTs** directly to the Solana devnet using ZK-compression.
- **Vigilant Forensics**: Continuous monitoring of smart contract vulnerabilities and malicious actor patterns.

---

## 🎨 Premium Experience

The NexaGuard ecosystem features a custom-built, high-performance UI designed for real-time visualization of security threats.

- **Adaptive 3D Shards**: A hardware-accelerated WebGL background (Next.js + Three.js) that visualizes the "shattered" nature of global security data.
- **Optimized for Zero Latency**: Custom lazy-loading and GPU-focused shader optimizations ensure a smooth 60FPS experience even on complex scenes.
- **Hydration-Safe Architecture**: Fully optimized for Next.js 16+, resolving complex SSR/CSR white-space mismatches for a flicker-free load.

---

## 🚀 Getting Started

NexaGuard consists of two primary modules: the **ElizaOS Agent** (Backend) and the **NexaGuard Portal** (Frontend).

### Prerequisites
- **Node.js**: 23+ (Latest LTS recommended)
- **Runtime**: [Bun](https://bun.sh) (preferred for performance) or pnpm
- **Environment**: Nosana Builders credits claimed and Docker Hub account.

### Quick Start

1. **Clone & Configure**
   ```bash
   git clone https://github.com/YOUR-USERNAME/agent-challenge nexaguard
   cd nexaguard
   cp .env.example .env
   # Update .env with your Nosana Qwen3.5 endpoint
   ```

2. **Launch the Agent (Server)**
   ```bash
   bun install
   bun dev
   ```

3. **Launch the Portal (Client)**
   ```bash
   cd client
   bun install
   bun dev
   ```
   Access the UI at `http://localhost:3001` (Portal) or the raw Eliza client at `http://localhost:3000`.

---

## 🛠️ Nosana Infrastructure Integration

NexaGuard is optimized for the **Nosana Qwen3.5-27B** endpoint. Ensure your `.env` is configured as follows for full hardware acceleration:

```env
OPENAI_API_KEY=nosana
OPENAI_API_URL=https://3gsrmj6gchzyws9bnc835apd4fh6t5tyeppmbxmzrzhn.node.k8s.prd.nos.ci/v1
OPENAI_BASE_URL=https://3gsrmj6gchzyws9bnc835apd4fh6t5tyeppmbxmzrzhn.node.k8s.prd.nos.ci/v1
MODEL_NAME=Qwen3.5-27B-AWQ-4bit
```

---

## 📦 Deployment to Nosana Nodes

Deploying NexaGuard to decentralized compute ensures that your security agent remains censorship-resistant and autonomous.

### 1. Build Container
```bash
docker build -t yourusername/nosana-eliza-agent:latest .
docker push yourusername/nosana-eliza-agent:latest
```

### 2. Post Job Definition
Update `nos_job_def/nosana_eliza_job_definition.json` with your image name and deploy via the [Nosana Dashboard](https://dashboard.nosana.com/deploy) or CLI:

```bash
nosana job post --file ./nos_job_def/nosana_eliza_job_definition.json --market nvidia-3090
```

---

## 🏆 Nosana ElizaOS Challenge (2026)

This project is a submission for the Nosana Builders ElizaOS Challenge.

| Place | Prize | Total Pool |
|-------|-------|------------|
| 🥇 1st | $1,000 | **$3,000 USDC** |

**Submission Deadline**: April 14, 2026.
Refer to the [official challenge listing](https://superteam.fun/earn/listing/nosana-builders-elizaos-challenge/) for full judging criteria.

---

## 📜 License

NexaGuard is open-source software licensed under the **MIT License**.

---

**Built with ElizaOS · Deployed on Nosana · Accelerated by Solana**
