  
import GenericService from "./GenericService";
class ContactsService extends GenericService {
  constructor() {
    super();
  }
  addCourse = (data) => this.post("contacts", data);
  deleteCourse = (_id) => this.delete("contacts/" + _id);
  updateCourse = (_id, data) => this.put("contacts/" + _id, data);
  getCourse = () => this.get("contacts");
  getSingleCourse = (id) => this.get("contacts/" + id);
}

let contactService = new ContactsService();
export default contactService;