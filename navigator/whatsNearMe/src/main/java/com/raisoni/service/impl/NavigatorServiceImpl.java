package com.raisoni.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.raisoni.dao.NavigatorDao;
import com.raisoni.model.Login;
import com.raisoni.model.Navigator;
import com.raisoni.model.Register;
import com.raisoni.service.NavigatorService;


@Service
public class NavigatorServiceImpl implements NavigatorService {

	@Autowired
	private NavigatorDao navigatorDB;
	
	@Override
	public void register(Register rg) {
		// TODO Auto-generated method stub
		navigatorDB.registerUser(rg);
		
	}
	@Override
	public Navigator getNavigator() {	
		Navigator nav = navigatorDB.getNavigator();
	return nav;
	
	}

	@Override
	public List<Navigator> getAllNavigator() {
		// TODO Auto-generated method stub
		return navigatorDB.getAllNavigator();
	}
	@Override
	public int loginUser(Login lg) {
		int ret=0;
		String i="";
		i =""+ navigatorDB.loginUser(lg);
		if (i.equals("null")) {
			ret=0;
				
		}
		else
		{
			ret = Integer.parseInt(i);
		}
		
		return ret;
	}

}
