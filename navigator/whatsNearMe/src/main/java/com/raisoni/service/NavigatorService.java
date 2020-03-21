package com.raisoni.service;

import java.util.List;

import com.raisoni.model.Login;
import com.raisoni.model.Navigator;
import com.raisoni.model.Register;


public interface NavigatorService {
	
	Navigator getNavigator();
	void register (Register rg);
	List<Navigator> getAllNavigator();
	int loginUser(Login lg);
	}
