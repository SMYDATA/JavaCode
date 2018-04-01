package com.smydata.businessplan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.businessplan.repository.RewardsRepository;
import com.smydata.registration.model.Rewards;

@Service
public class RewardsServiceImpl implements RewardsService {

	@Autowired
	RewardsRepository rewardsRepository;
	
	@Override
	public Rewards saveReward(Rewards rewards) {
		// TODO Auto-generated method stub
		return rewardsRepository.save(rewards);
	}

	@Override
	public Rewards getRewards(String mobile) {
		// TODO Auto-generated method stub
		return rewardsRepository.findByMobile(mobile);
	}

}
