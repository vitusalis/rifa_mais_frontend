import axios from "axios";

const url = 'http://localhost:5000/api/users/';

class UserService {
	static loginUser(user) {
		return new Promise((resolve) => {
			try {
				axios.post(url + 'login', { user }, { headers: { 'Content-type': 'application/json' } }).then((res) => {
					sessionStorage.setItem("user", JSON.stringify(res.data));
					resolve(res.status);
				}
				).catch(err => resolve(err))
			} catch (error) {
				console.log(`error\n ${error}`)
			}
		})
	}

	static validateUser(user) {
		return new Promise((resolve) => {
			try {
				axios.post(
					url + 'validate',
					{ user },
					{ headers: { 'Content-type': 'application/json' } }
				).then((res) => {
					resolve(res.data);
				}
				).catch(err => { return { err } })
			} catch (error) {
				resolve(error)
			}
		})
	}
}

export default UserService;