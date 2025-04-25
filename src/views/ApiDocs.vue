<template>
  <div class="api-docs">
    <section class="hero">
      <h1>API Documentation</h1>
      <p class="subtitle">Integrate with DynaWorld's Payment Platform</p>
    </section>

    <div class="docs-container">
      <nav class="docs-nav">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#authentication">Authentication</a></li>
          <li><a href="#endpoints">Endpoints</a></li>
          <li><a href="#examples">Examples</a></li>
        </ul>
      </nav>

      <main class="docs-content">
        <div class="tabs">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index"
            :class="['tab-button', { active: currentTab === index }]"
            @click="currentTab = index"
          >
            {{ tab.name }}
          </button>
        </div>

        <div class="tab-content">
          <section v-if="currentTab === 0" id="authentication" class="docs-section">
            <h2>Authentication</h2>
            <p>All API requests require authentication using an API key. Include your API key in the request header:</p>
            <div class="code-block">
              <pre><code>Authorization: Bearer your_api_key_here</code></pre>
            </div>
            <p>You can generate and manage your API keys from your dashboard.</p>
          </section>

          <section v-if="currentTab === 1" id="endpoints" class="docs-section">
            <h2>Endpoints</h2>
            
            <div class="endpoint-card">
              <div class="endpoint-header">
                <span class="method post">POST</span>
                <h3>/api/v1/payments</h3>
              </div>
              <p class="endpoint-description">Create a new payment transaction</p>
              <div class="endpoint-details">
                <h4>Request Body</h4>
                <div class="code-block">
                  <pre><code>{
  "amount": 100.00,
  "currency": "USD",
  "description": "Payment for services",
  "recipient": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}</code></pre>
                </div>
              </div>
            </div>

            <div class="endpoint-card">
              <div class="endpoint-header">
                <span class="method get">GET</span>
                <h3>/api/v1/payments/{id}</h3>
              </div>
              <p class="endpoint-description">Retrieve payment details</p>
              <div class="endpoint-details">
                <h4>Response</h4>
                <div class="code-block">
                  <pre><code>{
  "id": "pay_123456789",
  "status": "completed",
  "amount": 100.00,
  "currency": "USD",
  "created_at": "2024-03-20T10:30:00Z"
}</code></pre>
                </div>
              </div>
            </div>

            <div class="endpoint-card">
              <div class="endpoint-header">
                <span class="method get">GET</span>
                <h3>/api/v1/transactions</h3>
              </div>
              <p class="endpoint-description">List all transactions</p>
              <div class="endpoint-details">
                <h4>Query Parameters</h4>
                <div class="code-block">
                  <pre><code>?limit=10&offset=0&status=completed</code></pre>
                </div>
              </div>
            </div>
          </section>

          <section v-if="currentTab === 2" id="examples" class="docs-section">
            <h2>Examples</h2>
            
            <div class="example-card">
              <h3>Create Payment (cURL)</h3>
              <div class="code-block">
                <pre><code>curl -X POST https://api.dynaworld.com/v1/payments \
  -H "Authorization: Bearer your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100.00,
    "currency": "USD",
    "description": "Payment for services"
  }'</code></pre>
              </div>
            </div>

            <div class="example-card">
              <h3>Create Payment (JavaScript)</h3>
              <div class="code-block">
                <pre><code>const response = await fetch('https://api.dynaworld.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key_here',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 100.00,
    currency: 'USD',
    description: 'Payment for services'
  })
});</code></pre>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiDocs',
  data() {
    return {
      currentTab: 0,
      tabs: [
        { name: 'Authentication' },
        { name: 'Endpoints' },
        { name: 'Examples' }
      ]
    }
  }
}
</script>

<style scoped>
.api-docs {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, 
    rgba(224, 255, 255, 0.9),    /* Top-left: Pale teal */
    rgba(192, 255, 255, 0.9),    /* Light teal */
    rgba(160, 255, 255, 0.9),    /* Medium-light teal */
    rgba(128, 255, 255, 0.9),    /* Medium teal */
    rgba(96, 255, 255, 0.9),     /* Medium-dark teal */
    rgba(64, 255, 255, 0.9),     /* Dark teal */
    rgba(32, 255, 255, 0.9)      /* Bottom-right: Very dark teal */
  );
  min-height: 100vh;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;
  background: rgba(224, 255, 255, 0.7);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.hero h1 {
  font-size: 3rem;
  color: #000080;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
}

.docs-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

.docs-nav {
  position: sticky;
  top: 120px;
  background: rgba(224, 255, 255, 0.7);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  height: fit-content;
}

.docs-nav h3 {
  color: #000080;
  margin-bottom: 1rem;
}

.docs-nav ul {
  list-style: none;
  padding: 0;
}

.docs-nav li {
  margin-bottom: 0.8rem;
}

.docs-nav a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.docs-nav a:hover {
  color: #000080;
}

.docs-content {
  background: rgba(224, 255, 255, 0.7);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #008080, #006666);
  padding: 1rem;
  border-radius: 15px;
}

.tab-button {
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.tab-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.tab-button.active {
  background: #e0ffff;
  color: #008080;
  border-color: #e0ffff;
}

.tab-content {
  background: rgba(224, 255, 255, 0.7);
  padding: 2rem;
  border-radius: 15px;
}

.docs-section {
  margin-bottom: 3rem;
}

.docs-section h2 {
  color: #000080;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.endpoint-card {
  background: rgba(224, 255, 255, 0.7);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.endpoint-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.method {
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
}

.method.post {
  background: #4CAF50;
  color: white;
}

.method.get {
  background: #2196F3;
  color: white;
}

.endpoint-header h3 {
  color: #000080;
  margin: 0;
}

.endpoint-description {
  color: #666;
  margin-bottom: 1rem;
}

.endpoint-details h4 {
  color: #000080;
  margin-bottom: 0.5rem;
}

.code-block {
  background: rgba(224, 255, 255, 0.5);
  padding: 1rem;
  border-radius: 10px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

.code-block code {
  color: #333;
}

.example-card {
  background: rgba(224, 255, 255, 0.7);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.example-card h3 {
  color: #000080;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .docs-container {
    grid-template-columns: 1fr;
  }

  .docs-nav {
    position: static;
    margin-bottom: 2rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .tabs {
    flex-direction: column;
  }

  .tab-button {
    width: 100%;
  }
}
</style> 