// API base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

class APIClient {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('hub_token');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('hub_token', token);
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('hub_token');
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  // Auth endpoints
  async signup(name, email, password) {
    return this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  }

  async login(email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me', {
      method: 'GET',
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  // Appointment endpoints
  async createAppointment(appointmentData) {
    return this.request('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  }

  async getUserAppointments() {
    return this.request('/appointments/user', {
      method: 'GET',
    });
  }

  async getAppointmentById(id) {
    return this.request(`/appointments/${id}`, {
      method: 'GET',
    });
  }

  async updateAppointment(id, updates) {
    return this.request(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteAppointment(id) {
    return this.request(`/appointments/${id}`, {
      method: 'DELETE',
    });
  }

  async getAllAppointments(status = null) {
    const query = status ? `?status=${status}` : '';
    return this.request(`/appointments${query}`, {
      method: 'GET',
    });
  }

  // Services endpoints
  async getAllServices() {
    return this.request('/services', {
      method: 'GET',
    });
  }

  async getServiceById(id) {
    return this.request(`/services/${id}`, {
      method: 'GET',
    });
  }

  // Users endpoints
  async getAllUsers(status = null) {
    const query = status ? `?status=${status}` : '';
    return this.request(`/users${query}`, {
      method: 'GET',
    });
  }

  async getUserById(id) {
    return this.request(`/users/${id}`, {
      method: 'GET',
    });
  }

  async updateUser(id, updates) {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async getUserStats() {
    return this.request('/users/stats', {
      method: 'GET',
    });
  }
}

export default new APIClient();
