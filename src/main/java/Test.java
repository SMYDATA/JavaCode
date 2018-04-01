

import java.util.Date;

import com.smydata.registration.model.Rewards;



public class Test {

	public static void main(String[] args) {

		Date todayDate =new Date();
		
		Rewards reward = new Rewards();
		//reward.setBonusEndDate(todayDate);
		
		System.out.println("date: "+todayDate.getTime());
		
		
	}

}
