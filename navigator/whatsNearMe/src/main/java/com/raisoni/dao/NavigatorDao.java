package com.raisoni.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.raisoni.model.Navigator;
import com.raisoni.model.Register;

@Mapper
public interface NavigatorDao {
	
	@Select("select * from chatboat")
	List<Navigator> getAllNavigator();
	
	@Select("select * from chatboat limit 1")
	Navigator getNavigator();
	
	@Insert("insert into register ( name ,  emailid ,contact , pass , addrs  )values ( #{name} , #{emailid}, #{contact}, #{pass}, #{addrs})")
	void registerUser(Register rg);
	

	
	

}
