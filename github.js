class Github {
  constructor() {
    this.client_id = '13e8ccc64861738de485';
    this.client_secret = '402cc8d2f90e708baf28bebef6ddca81480f6879';
    this.repos_count = 5;
    this.repos_sort = 'created_asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
      client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
