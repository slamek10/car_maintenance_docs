package cardocs.web.controllers;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.validation.BindingResult;

import cardocs.oracle.db.dbConnection;

@Controller
@RequestMapping("CarMaintenanceDocuments")
public class MainController {
	
	@RequestMapping(value = { "/apl/getLoginParameters" }, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<ResponseData> findDataByParameters(@RequestParam("username") String username, @RequestParam("password") String password) throws ClassNotFoundException, SQLException {
			
		ResponseData respData = new ResponseData();
		
//		boolean userExists = dbConnection.getLoginData(username, password);
		boolean userExists = true;

		if (userExists) {
			
			respData.setSuccess(true);
			return new ResponseEntity<>(respData, HttpStatus.OK);
			
		} else {
			
			respData.setSuccess(false);
		//	respData.setFieldErrors(getFieldErrors(bindingResult));
			return new ResponseEntity<>(respData, HttpStatus.BAD_REQUEST);
			
		}

	}
	
	@RequestMapping(value = { "/apl/getNewAccountParameters" }, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<ResponseData> accountRegisterParameters(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("email") String email) throws ClassNotFoundException, SQLException {
			
		ResponseData respData = new ResponseData();
		
		boolean userAdded = dbConnection.getDataForRegistration(username, password, email);
	
		if (userAdded) {
			
			respData.setSuccess(true);
			return new ResponseEntity<>(respData, HttpStatus.OK);
			
		} else {
			
			respData.setSuccess(false);
			return new ResponseEntity<>(respData, HttpStatus.BAD_REQUEST);
			
		}
		
	}
		
	private class ResponseData {
		
		private boolean success;
		private String message;
		private List<FieldError> fieldErrors;

		public boolean isSuccess() {
			return success;
		}

		public void setSuccess(boolean success) {
			this.success = success;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public List<FieldError> getFieldErrors() {
			return fieldErrors;
		}

		public void setFieldErrors(List<FieldError> fieldErrors) {
			this.fieldErrors = fieldErrors;
		}
				
	}
	
	private class FieldError {
		
		private String field;	
		private String message;
		
		public String getField() {
			return field;
		}

		public String getMessage() {
			return message;
		}

		public FieldError(String message) {
			super();
			this.message = message;
		}

		public FieldError(String field, String message) {
			super();
			this.field = field;
			this.message = message;
		}

	}
	
	private List<FieldError> getFieldErrors(BindingResult bindingResult) {
		List<FieldError> errors = new ArrayList<>();
		for(org.springframework.validation.FieldError item : bindingResult.getFieldErrors()) {
			errors.add(new FieldError(item.getField(), item.getCode()));
		}
		for(org.springframework.validation.ObjectError item : bindingResult.getGlobalErrors()) {
			if(item.getArguments() != null)
				errors.add(new FieldError((String)item.getArguments()[0],(String)item.getArguments()[1]));
			else errors.add(new FieldError(item.getCode()));
		}
		return errors;
	}

}