const LocalStorage = {
  set: (key, value) => {
    const stringValue = JSON.stringify(value);
    return window.localStorage.setItem(key, stringValue);
  },

  get: (key) => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  remove: (key) => {
    return window.localStorage.removeItem(key);
  },
};

export default LocalStorage;

// const LocalStorage = {
//     // Lưu dữ liệu vào localStorage (tự động stringify)
//     set: (key, value) => {
//       try {
//         const stringValue = JSON.stringify(value);
//         window.localStorage.setItem(key, stringValue);
//       } catch (error) {
//         console.error(`Error saving key "${key}" to localStorage:`, error);
//       }
//     },

//     // Lấy dữ liệu từ localStorage (tự động parse)
//     get: (key) => {
//       try {
//         const value = window.localStorage.getItem(key);
//         return value ? JSON.parse(value) : null; // Trả về null nếu không tồn tại
//       } catch (error) {
//         console.error(`Error reading key "${key}" from localStorage:`, error);
//         return null; // Trả về null nếu lỗi
//       }
//     },

//     // Xóa dữ liệu trong localStorage
//     remove: (key) => {
//       try {
//         window.localStorage.removeItem(key);
//       } catch (error) {
//         console.error(`Error removing key "${key}" from localStorage:`, error);
//       }
//     },
//   };

//   export default LocalStorage;
