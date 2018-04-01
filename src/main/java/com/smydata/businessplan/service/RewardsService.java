package com.smydata.businessplan.service;

import com.smydata.registration.model.Rewards;

public interface RewardsService {
	Rewards saveReward(Rewards rewards);
	Rewards getRewards(String mobile);
}
