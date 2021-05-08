module.exports = class User {
  constructor(payload) {
    this.id = Math.random().toString(16).substr(2, 6);
    this.name = payload.name || null;
    this.username = payload.username || null;
    this.dataOfBirth = payload.dataOfBirth || null;
    this.education = payload.education || null;
    this.direction = payload.direction || null;
    this.specialties = payload.specialties || null;
    this.email = payload.email || null;
    this.address = payload.address || null;
    this.phone = payload.phone || null;
    this.website = payload.website || null;
    this.company = payload.company || null;
  }
}
