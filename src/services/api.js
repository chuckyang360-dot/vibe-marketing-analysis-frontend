// API 配置
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-railway-domain.railway.app';

// 创建 API 客户端
const api = {
  // 认证相关
  loginWithGoogle: async (idToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: idToken }),
      });
      return await response.json();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // X 分析相关
  startAnalysis: async (keyword, idToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/x-analysis/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword,
          id_token: idToken
        }),
      });
      return await response.json();
    } catch (error) {
      console.error('Start analysis error:', error);
      throw error;
    }
  },

  getTaskStatus: async (taskId, idToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/x-analysis/status/${taskId}?id_token=${idToken}`);
      return await response.json();
    } catch (error) {
      console.error('Get task status error:', error);
      throw error;
    }
  },

  getAnalysisResults: async (taskId, idToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/x-analysis/results/${taskId}?id_token=${idToken}`);
      return await response.json();
    } catch (error) {
      console.error('Get analysis results error:', error);
      throw error;
    }
  },

  getHistory: async (idToken, limit = 10, offset = 0) => {
    try {
      const response = await fetch(`${API_BASE_URL}/x-analysis/history?limit=${limit}&offset=${offset}&id_token=${idToken}`);
      return await response.json();
    } catch (error) {
      console.error('Get history error:', error);
      throw error;
    }
  },

  // 健康检查
  healthCheck: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return await response.json();
    } catch (error) {
      console.error('Health check error:', error);
      throw error;
    }
  }
};

export default api;