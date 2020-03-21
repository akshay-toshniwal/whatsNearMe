package com.raisoni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.raisoni.model.Login;
import com.raisoni.model.Navigator;
import com.raisoni.model.Register;
import com.raisoni.service.NavigatorService;

@RestController
@CrossOrigin(origins = "*")
public class NavigatorController {

   @Autowired
   private NavigatorService ns;
   
   @GetMapping("/navigator")
	Navigator getChatboat() {
		//apply internet related logic here
		return ns.getNavigator();
	}
	
	@GetMapping("/navigator/all")
	List<Navigator> getAllNavigator() {
		return ns.getAllNavigator();
	}
	
	@PostMapping("/register")
	String  addUser(@RequestBody Register rg) {
		ns.register(rg);
   
		return("Hello  ");
  
	}
	
	@PostMapping("/navigator/login")
	int chkLogin(@RequestBody Login lg) {
		
		
		int id =  ns.loginUser(lg);
		return id;
		  
	}
}
