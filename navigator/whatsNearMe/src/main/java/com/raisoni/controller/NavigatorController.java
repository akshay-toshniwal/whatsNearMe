package com.raisoni.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@PostMapping("/sessionUser")
	public String sessionUser(@RequestBody String msg, HttpServletRequest request) {
		@SuppressWarnings("unchecked")
		String messages = (String) request.getSession().getAttribute("Logged_in_Usrs");
		if (messages == null) {
			request.getSession().setAttribute("Logged_in_Usrs", msg);
		}
		request.getSession().setAttribute("Logged_in_Usrs", msg);
		return "redirect:/navigator";
	}
	
	@PostMapping("/logout")
	public String destroySession(HttpServletRequest request) {
		request.getSession().invalidate();
		return "redirect:/navigator/login";
	}
}
